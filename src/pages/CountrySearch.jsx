import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from '../service/country-service';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const formSubmit = value => {
    setRegion(value);
    setSearchParams({ query: value });
  };
  // залишати значеня країни при переході назад зі сторінки окремої країни

  useEffect(() => {
    if (region === '') {
      return;
    }
    const params = searchParams.get('query');
    console.log(params);
    setLoading(true);
    const allRegions = async () => {
      try {
        const data = await fetchByRegion(params);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    allRegions();
  }, [region, searchParams]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error !== null && <Heading>Sorry,one more time!</Heading>}
        <SearchForm formSubmit={formSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
