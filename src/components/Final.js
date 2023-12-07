import finalStyles from "../styles/Final.module.css";

const Final = () => {
    return (
        <div className={finalStyles.finalContainer}>
            <div className={finalStyles.message}>
                Your order is successfully placed
            </div>
        </div>
    )
}
export default Final;