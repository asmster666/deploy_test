import s from '../../styles/components.module.scss';

export const Loader = (props) => {
    return (
        <svg {...props} className={s.loader__spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className={s.loader__path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    )
}

export const CurvedArrow = (props) => {
    return (
        <svg {...props} fill={'#adbdcd'} className={s.curvedArrow} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 414.537"><path fillRule="nonzero" d="M239.328 307.707c-35.974 29.622-93.074 70.771-124.026 101.724-7.703 4.623-16.377 6.064-24.427 4.496-8.291-1.606-15.867-6.316-21.078-13.928l-1.587-2.598L0 262.585l23.27-11.733c6.285 12.42 46.017 93.326 61.794 123.347 8.421-113.201 50.941-202.355 119.111-265.333C279.447 39.322 385.727 2.089 511.589 0L512 26.017c-119.332 1.982-219.659 36.875-290.178 102.028-64.084 59.205-103.812 143.79-111.061 251.776l112.032-92.217 16.535 20.103z"/></svg>
    )
}