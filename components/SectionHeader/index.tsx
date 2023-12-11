import React from "react";

interface SectionHeaderProps {
	title: string;
	subtitle: string;
  }
  
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  
	return (
		<>
			<h1 className='font-bold md:text-[30px] text-[19px] capitalize mb-5'>{title}</h1>
			<p className='text-base mb-12'>{subtitle}</p>
		</>
	);
};

export default SectionHeader;
