import React from 'react';
import StyledArticle, {
	StyledExtraInfoSpan,
	StyledTopSection,
	EmojiStyled,
	StyledExtraInfoSection,
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
				<EmojiStyled>{countryData.emoji}</EmojiStyled>
				<h3>{countryData.name}</h3>
			</StyledTopSection>
			<StyledExtraInfoSection>
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
			</StyledExtraInfoSection>
		</StyledArticle>
	</>
);
