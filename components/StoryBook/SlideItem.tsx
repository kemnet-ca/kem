/* eslint-disable @next/next/no-img-element */

interface SlideItemProps {
	src: string;
  }
  
  const SlideItem: React.FC<SlideItemProps> = ({ src }) => {
   
	return (
		<div className="w-full  flex justify-center">
			<img
				src={src}
				alt='case-study-1'
				className='h-[500px] w-[500px] '
				
			/>
		</div>
	);
};

export default SlideItem;
