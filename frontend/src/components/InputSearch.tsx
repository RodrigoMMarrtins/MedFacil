import CustomImage from './Image';

import styles from '@/components/ContainerForm.module.css'

const InputSearch = () => {
    return (
        <div className={styles.container_search}>
            <span className={styles.search_icon_container}>
                <CustomImage
                src="/images/search.svg"
                alt="Lupa de Pesquisa"
                width={20}
                height={20}
                />
                
            </span>
            <input type="search"/>
            <span className={styles.span_search}>Pesquisar</span>
        </div>
    )
}

export default InputSearch;