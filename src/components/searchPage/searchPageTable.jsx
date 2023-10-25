import React, { useState } from "react";
// import "./SearchPage.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { responseData, objectSearch } from "../../jsAdditions/histogramsSlice";
import InnValidation from '../../validateInn';

const FormDiv = styled.div`
  width: 406px;
  height: 500px;
  border:1px solid green;
  margin:21px 0 0 45px;
  .field {
    color:grey;
    width:259px;
    height:17px;
    font-size:14px;
    text-transform:full-width;
    margin-left:62px;
  }
  
  .checkDiv {
    width:406px;
    height:244px;
    margin-bottom:145px;
  }
  .checkDivItem {
    width:100%;
    height:22px;
    margin-bottom:15px;
  }
`
const FormDivS = styled(FormDiv)`
  width:372px;
  height:446px;
  div {
    width:372px;
    height:94px;
    margin-bottom:20px;
  }
`

const Button = styled.button`
    cursor:pointer;
    background-color: #5970FF;
    border: none;
    height: 59px;
    width : 305px;
    color:#fff; 
    font-family: inter;
    margin-left: 66px;
    font-size:20px;
    margin-bottom:10px;
`
const Input = styled.input`
  height:43px;
  width:242px;
  border-radius:5px;
  border:1px solid black;
  margin-top:20px;
  text-align:center;
  /* padding:0 20px; */
`

function SearchPageTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormState = {
    innCompany: {
      value: "",
      isInvalid: null,
      checkValidation: value => InnValidation(value)
    },
    tonality: {
      value: "any",
    },
    limit: {
      value: 0,
      isInvalid: null,
      checkValidation: value => value >= 1 && value <= 1000
    },
    startDate: {
      value: "",
      isInvalid: null,
      checkValidation: (value, prevState) => {
        return prevState.endDate.value !== "" ? prevState.endDate.value >= value : true
      }
    },
    endDate: {
      value: "",
      isInvalid: null,
      checkValidation: (value, prevState) => {
        return prevState.startDate.value !== "" ? prevState.startDate.value <= value : true
      }
    },
    maxFullness: {
      title: "Признак максимальной полноты",
      checked: false,
    },
    inBusinessNews: {
      title: "Упоминания в бизнес-контексте",
      checked: false,
    },
    onlyMainRole: {
      title: "Главная роль в публикации",
      checked: false,
    },
    onlyWithRiskFactors: {
      title: "Публикации только с риск-факторами",
      checked: false,
    },
    excludeTechNews: {
      title: "Включать технические новости рынков",
      checked: false,
    },
    excludeAnnouncements: {
      title: "Включать анонсы и календари",
      checked: false,
    },
    excludeDigests: {
      title: "Включать сводки новостей",
      checked: false,
    },
  };

  const [formState, setFormState] = useState(initialFormState);

  const checkFormValidation = () => {
    return !Object.values(formState)
      .filter(({ isInvalid }) => isInvalid !== undefined)
      .every(({ isInvalid }) => isInvalid === false || isInvalid === null)
  }

  const handleFormInput = ({ target }, type) => {
    const { id, value } = target;

    if (type === "checkbox") {
      const { checked } = target;

      setFormState((prevState) => {
        return {
          ...prevState,
          [id]: {
            checked,
            title: prevState[id].title,
          },
        };
      });

      return;
    }

    if (formState[id].isInvalid !== undefined) {
      setFormState((prevState) => {
        return {
          ...prevState,
          [id]: {
            ...prevState[id],
            value,
            isInvalid: !formState[id].checkValidation(value, prevState),
          },
        };
      });

      return;
    }

    setFormState((prevState) => {
      return {
        ...prevState,
        [id]: {
          value,
        },
      };
    });
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("authToken"));

    const getHistograms = (token) => {
      const {
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        excludeTechNews,
        excludeAnnouncements,
        excludeDigests,
      } = initialFormState;
      const url =
        "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms";
      const payload = {
        issueDateInterval: {
          startDate: formState.startDate.value,
          endDate: formState.endDate.value,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: formState.innCompany.value,
                maxFullness: maxFullness.checked,
                inBusinessNews: inBusinessNews.checked,
              },
            ],
            onlyMainRole: onlyMainRole.checked,
            tonality: formState.tonality.value,
            onlyWithRiskFactors: onlyWithRiskFactors.checked,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: excludeTechNews.checked,
          excludeAnnouncements: excludeAnnouncements.checked,
          excludeDigests: excludeDigests.checked,
        },
        similarMode: "duplicates",
        limit: formState.limit.value,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      };

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      };

      return fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          localStorage.setItem("data", JSON.stringify(response));
          return response;
        })
        .then((response) => {
          const { data } = response;

          dispatch(
            responseData({
              data,
            })
          );
        })
        .catch(function (error) {
          throw new Error(error);
        });
    };
    getHistograms(token);

    const getTotalResult = (token) => {
      const {
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        excludeTechNews,
        excludeAnnouncements,
        excludeDigests,
      } = initialFormState;

      const url = "https://gateway.scan-interfax.ru/api/v1/objectsearch";
      const payload = {
        issueDateInterval: {
          startDate: formState.startDate.value,
          endDate: formState.endDate.value,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: formState.innCompany.value,
                maxFullness: maxFullness.checked,
                inBusinessNews: inBusinessNews.checked,
              },
            ],
            onlyMainRole: onlyMainRole.checked,
            tonality: formState.tonality.value,
            onlyWithRiskFactors: onlyWithRiskFactors.checked,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: excludeTechNews.checked,
          excludeAnnouncements: excludeAnnouncements.checked,
          excludeDigests: excludeDigests.checked,
        },
        similarMode: "duplicates",
        limit: formState.limit.value,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      };

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      };

      return fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          localStorage.setItem("resultData", JSON.stringify(response));
          return response;
        })
        .then((response) => {
          dispatch(
            objectSearch({
              resultData: response
            })
          );
        })
        .then(() => {
          navigate("/result");
        })
        .catch(function (error) {
          throw new Error(error);
        })
    };

    getTotalResult(token);
  };

  return (
    <Form
      style={{ width: 872, height: 543, display: 'flex', justifyContent:'space-between' }}
      onSubmit={handleSubmitSearch}
    >
      <FormDivS>
        <div>
          <span>ИНН компании*</span>
          <Input   
            type="text"
            placeholder="10 цифр"
            id={"innCompany"}
            value={formState.innCompany.value}
            isInvalid={formState.innCompany.isInvalid}
            onChange={handleFormInput}
            required/>
        </div>
        <div>
          <span>Тональность</span>
          <select 
            id="tonality"
            value={formState.tonality.value}
            isInvalid={formState.tonality.isInvalid}
            onChange={handleFormInput}>
            <option value={"any"}>Любая</option>
            <option value={"negative"}>Позитивная</option>
            <option value={"positive"}>Негативная</option>
          </select>
        </div>
        <div>
          <span>Количество документов в выдаче*</span>
          <Input 
            type="number"
            min="1"
            max="1000"
            placeholder="от 1 до 1000"
            id="limit"
            value={formState.limit.value}
            isInvalid={formState.limit.isInvalid}
            onChange={handleFormInput}
            required  />
        </div>
        <div>
          <span>Диапазон поиска*</span>
          <div style={{display:'flex'}}>
          <Input
            style={{width:176}}
            placeholder="Дата начала"
            type="text" onFocus={(e) => (e.target.type = "date")} 
            id="startDate"
            value={formState.startDate.value}
            isInvalid={formState.startDate.isInvalid}
            onChange={handleFormInput}
            required />
          <Input
           style={{width:176}}
           placeholder="Дата конца" type='text'
           onFocus={(e) => (e.target.type = "date")}  id="endDate"
           value={formState.endDate.value}
           isInvalid={formState.endDate.isInvalid}
           onChange={handleFormInput}
           required />
          </div>
          
        </div>
        
      </FormDivS>
      <FormDiv>
        <div className="checkDiv">
          {Object.entries(formState).map(
            ([id, { title, checked }]) =>
              title &&
              checked !== undefined && (
                <div className="checkDivItem">
                  <Form.Check 
                    type="checkbox"
                    id={id}
                    label={title}
                    checked={checked}
                    onChange={(e) => handleFormInput(e, "checkbox")}
                  />
                </div>
              )
          )}
        </div>
        <Button type="submit" disabled={checkFormValidation()} >Поиск</Button>
        <div className="field">* Обязательные к заполнению поля</div>
      </FormDiv>
    </Form>
  );
}

export default SearchPageTable;