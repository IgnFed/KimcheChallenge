import React from 'react';
import StyledArticle, {
	StyledExtraInfoSpan,
	StyledTopSection,
} from './index.styled';

export const Card = ({ countryData }) => (
	<StyledArticle>
		<StyledTopSection>
			<span>{countryData.emoji}</span>
			<h4>{countryData.name}</h4>
		</StyledTopSection>
		<section>
			<p>
				<StyledExtraInfoSpan>Continent</StyledExtraInfoSpan>:{' '}
				{countryData.continent.name}
			</p>
			<p>
				<StyledExtraInfoSpan>Capital</StyledExtraInfoSpan>:{' '}
				{countryData.capital}
			</p>
			<p>
				<StyledExtraInfoSpan>Native Language</StyledExtraInfoSpan>:{' '}
				{countryData.languages[0]?.name || '-'}
			</p>
		</section>
	</StyledArticle>
);
