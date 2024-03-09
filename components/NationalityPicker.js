import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
//TODO mandar por objeto el valor del pais seleccionado
const NationalityPicker = ({ handleDataFormChange, dataFormValues }) => {
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [isNationalityValid, setIsNationalityValid] = useState(false);
  const { t } = useTranslation();

  const urlCountries =
    'https://referential.p.rapidapi.com/v1/country?fields=currency%2Ccurrency_num_code%2Ccurrency_code%2Ccontinent_code%2Ccurrency%2Ciso_a3%2Cdial_code&limit=250';

  const options = {
    method: 'GET',
    url: 'https://referential.p.rapidapi.com/v1/country',
    params: {
      fields:
        'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
      limit: '250',
    },
    headers: {
      'X-RapidAPI-Key': '6b6a7b5ed6mshf1dd120e4460f50p14df31jsn71787f59f979',
      'X-RapidAPI-Host': 'referential.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(urlCountries, options)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setCountries(results.sort((a, b) => a.value.localeCompare(b.value)));
      });
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  const picker = useRef(null);

  const handleOutsideClick = (e) => {
    if (!picker.current.contains(e.target)) {
      setShowOptions(false);
    } else {
    }
  };

  const handleCountrySelected = (country) => {
    setSelectedCountry(country);
    setShowOptions(false);
    setIsNationalityValid(true);
    handleDataFormChange({
      ...dataFormValues,
      nationality: country,
    });
  };

  const handleWriting = (e) => {
    let flag = true;
    setSelectedCountry(e.target.value);
    countries.map((item) => {
      if (item.value.toLowerCase() === e.target.value.toLowerCase()) {
        setIsNationalityValid(true);
        flag = false;
      }
    });
    if (flag) {
      setIsNationalityValid(false);
    }
  };

  return (
    <div className="container-input-field " ref={picker}>
      <div
        className={`${
          isNationalityValid ? 'input-field' : 'input-field-incorrect'
        } relative`}
      >
        <input
          type="text"
          id="nationality"
          required
          autoComplete="off"
          value={selectedCountry}
          onChange={(e) => {
            handleWriting(e);
          }}
          onClick={() => {
            setShowOptions(true);
          }}
        />
        <label htmlFor="nationality">{t('reserve_nationality')}:</label>
        <div
          className={`absolute top-[45px] w-full max-h-[216px] border bg-white z-20 overflow-y-scroll shadow-2xl  shadow-[-1px 1px 24px -1px rgba(0,0,0,1)] rounded-lg transition-all duration-300 ease-out ${
            showOptions ? 'scale-100 visible' : 'scale-50 invisible'
          }`}
        >
          {countries &&
            countries.length > 0 &&
            countries.map((item, index) => {
              if (
                item.value
                  .toLowerCase()
                  .startsWith(selectedCountry.toLowerCase())
              ) {
                return (
                  <div
                    className={`w-full h-12 p-4 flex justify-start items-center hover:bg-[#f5f5f5] cursor-pointer`}
                    onClick={() => {
                      handleCountrySelected(item.value);
                    }}
                    key={index}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border border-slate-300 `}
                    ></div>
                    <div className="ml-3">{item.value}</div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default NationalityPicker;
