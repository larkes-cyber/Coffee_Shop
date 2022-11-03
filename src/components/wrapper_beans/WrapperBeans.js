import './_wrapper_beans.scss';

const WrapperBeans = (props) => {
   const classBeans = `divider ${props.color === 'dark'?"divider_dark":"divider_white"}`;
    return (
        <div className='beans__wrapper'>
            <div className={classBeans}></div>
            <img src={props.beans} alt="beans"/>
            <div className={classBeans}></div>
        </div>
    )

}

export default WrapperBeans;