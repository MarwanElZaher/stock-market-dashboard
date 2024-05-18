import React from 'react';

function Button({
  onClick,
  text,
  buttonContainerStyle,
  imgSrc,
  alt,
  isExpanded,
  ...props
}) {
  return (
    <div className={`flex ${isExpanded ? "items-center" : "justify-center"} ${buttonContainerStyle}`}>
      {isExpanded ? (
        <button {...props} onClick={onClick} className="flex flex-row items-center p-3">
          {imgSrc && <img src={imgSrc} alt={alt} className="mr-2" />}
          <span className='font-normal text-2xl text-19'>{text}</span>
        </button>
      ) : (
        <button {...props} onClick={onClick} className="p-3">
          {imgSrc && <img src={imgSrc} alt={alt} className="mr-2" />}
        </button>
      )}
    </div>
  );
}

export default Button;
