/* eslint-disable @next/next/no-img-element */

interface SlideItemProps {
	src: string;
  }
  
  const SlideItem: React.FC<SlideItemProps> = ({ src }) => {
   
	return (
		<div>
			<img
				src={src}
				alt='case-study-1'
				className=''
				width={1200}
				height={800}
			/>
		</div>
	);
};

export default SlideItem;
