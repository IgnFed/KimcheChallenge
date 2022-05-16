import React from 'react';
import StyledArticle, {
	StyledExtraInfoSpan,
	StyledTopSection,
} from './index.styled';

export const Card = ({ countryData, currentFilter }) => (
	<>
		<h2>
			{currentFilter === 'continent'
				? countryData.continent.name
				: countryData.languages[0]?.name ?? 'No Name'}
		</h2>
		<StyledArticle>
			<StyledTopSection>
				<span>{countryData.emoji}</span>
				<h4>{countryData.name}</h4>
			</StyledTopSection>
			<section>
				<p>
					<StyledExtraInfoSpan>Capital</StyledExtraInfoSpan>:{' '}
					{countryData.capital || 'No Found'}
				</p>
				<p>
					<StyledExtraInfoSpan>Currency</StyledExtraInfoSpan>:{' '}
					{countryData.currency || 'No Found'}
				</p>
				<p>
					<StyledExtraInfoSpan>Native Language</StyledExtraInfoSpan>:{' '}
					{countryData.languages[0]?.name || 'No Found'}
				</p>
			</section>
		</StyledArticle>
	</>
);
