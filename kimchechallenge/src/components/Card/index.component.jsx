import React from 'react';
import StyledArticle, {
	StyledExtraInfoSpan,
	StyledTopSection,
	EmojiStyled,
	StyledExtraInfoSection,
} from './index.styled';

export default function Card({ countryData, currentFilter }) {
	return (
		<>
			<h2>
				{currentFilter === 'continent'
					? countryData.continent.name
					: countryData.languages[0]?.name ?? 'No Name'}
			</h2>
			<StyledArticle
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
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
}
