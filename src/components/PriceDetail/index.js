import toast from 'react-hot-toast';
import styles from './price-datail.module.scss';

const PriceDetail = ({state, clearCart}) => {
    const calculateAmount = () => {
        let amount = 0;
        state.forEach((ele) => {
            amount= amount + Number(ele.variant?.grossPrice) * Number(ele.quantity);
        })
        return amount;
    }
    const totalAmount = calculateAmount();
    const amountSection = [
        {
            text: "Items total",
            amount: totalAmount
        },
        {
            text: "SGST(9%)",
            amount: totalAmount * 0.09
        },
        {
            text: "CGST(9%)",
            amount: totalAmount * 0.09
        },
        {
            text: "IGST(9%)",
            amount: totalAmount * 0.09
        },
        {
            text: "Taxable Amount",
            amount: 1000
        },
    ]
    const calculateTotalAmount = () => {
        let amount=0;
        amountSection.forEach((ele) => {
            amount=amount + ele.amount;
        })
        return Number(amount).toFixed(2);
    }
    return (
        <div className={styles.main}>
            <div className={styles.purchaseHeading}>Purchase Order Number:</div>
            <div className={styles.purchaseNumber}>101142353</div>
            <div className={styles.adddressWrapper} >
                <div className={styles.addressTxt}>Addresses:</div>
                <div className={styles.view}>{`View >`}</div>
            </div>
            <div className={styles.address}>
                Office: random address random address random address random address random address random address
            </div>
            {amountSection.map((ele) => {
                return  <div className={styles.amountSection}>
                <div className={styles.amountTxt}>{ele.text}</div>
                <div className={styles.amount}>{state[0].product.currency?.symbol} {ele.amount}</div>
            </div>
            })}
            <div className={styles.totalAmount}>
                <div>Order total</div>
                <div>{state[0].product.currency?.symbol} {calculateTotalAmount()}</div>
            </div>
            <div className={styles.btnSection}>
                <button className={styles.clearCart} onClick={clearCart}>Clear Cart</button>
                <button className={styles.placeOrder} onClick={() => {
                    toast.success("Order Placed Successfully.");
                    clearCart();
                }}>Place Order</button>
            </div>
        </div>
    )
};

export default PriceDetail;