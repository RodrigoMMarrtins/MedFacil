

import Image from 'next/image'

import styles from './Image.module.css'

interface CustomImageProps{
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string
}

const CustomImage = ({src, alt, width, height, className}:CustomImageProps ) => {
    return(
        <div className={className} style={{width, height}}>
            <Image src={src} alt={alt} width={width} height={height}/>
        </div>
    )
}

export default CustomImage;