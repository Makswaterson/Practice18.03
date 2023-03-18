import { Link, useLocation } from 'react-router-dom';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  countrie: { flag, capital, country, id, languages = [], population },
}) => {
  const location = useLocation();

  const backToCountry = location.state?.from?.pathname ?? '/';

  return (
    <CountryWrapper key={id}>
      <Flag>
        <Image src={flag} alt={country} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>{country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
      <Link to={backToCountry}>
        {''}
        <button type="button">back to country</button>
      </Link>
      {/* <Link to="/country/">
        {' '}
        <button type="button">back to region</button>
      </Link> */}
      <Link to="/country/">
        {' '}
        <button type="button">back to region</button>
      </Link>
    </CountryWrapper>
  );
};
