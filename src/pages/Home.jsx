import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCounties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCounties = async () => {
      try {
        const data = await getCountries();
        setCounties(data);
      } catch (error) {
        setError(error);
      }
    };
    allCounties();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
