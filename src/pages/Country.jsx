import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { fetchCountry } from 'service/country-service';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const [countrie, setCountrie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { countryId } = useParams();

  useEffect(() => {
    const oneCountie = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountrie(data);
      } catch (error) {
        setError(error);
      }
    };
    oneCountie();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo countrie={countrie} />
      </Container>
    </Section>
  );
};
