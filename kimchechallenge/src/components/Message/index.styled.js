import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
	text-align: center;
	font-size: clamp(1.5vmax, 1.5vw, 3rem);
	background-color: ${props =>
		props.type === 'error' ? '#f55549' : '#496cf5'};
	position: relative;
	margin: auto;
	width: fit-content;
	padding: 1rem;
	border-radius: 0.75rem;
`;
