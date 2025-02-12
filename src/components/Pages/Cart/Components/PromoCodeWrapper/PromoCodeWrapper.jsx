import React, { useContext, useState } from 'react';
import { BasketContext } from '../../../../../context/BasketContext';
import styles from './promoCodeWrapper.module.css'

export const PromoCodeWrapper = () => {
    const { setDiscountApplied } = useContext(BasketContext);
    const [promoCode, setPromoCode] = useState('');

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const applyPromoCode = () => {
        if (promoCode === 'sale20') {
            setDiscountApplied(true);
            alert('Промокод на скиндку 20% успешно применен!')
            setPromoCode('')
        }
        if (promoCode !== 'sale20') {
            setDiscountApplied(false);
            alert('Ошибка! Введите корректный промокод.')
            setPromoCode('')
        }
    }

    return (
        <div className={styles.promoCodeWrapper}>
            <div className={styles.info}>
                <div className={styles.title}>You Have A Promo Code?</div>
                <div className={styles.description}>
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <div className={styles.promoCode}>
                <input
                    type='text'
                    name='promo-code'
                    className={styles.input}
                    placeholder='Enter promo code'
                    value={promoCode}
                    onChange={handlePromoCodeChange}
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} onClick={applyPromoCode}>
                        <img src='./icons/white-arrow.svg' alt='White Arrow' />
                    </button>
                    <div className={styles.verticalLineCart}></div>
                </div>
            </div>
            <div className={styles.findUs}>
                <div className={styles.findUsText}>Find us here:</div>
                <div className={styles.findUsLinks}>
                    <div className={styles.findUsLink}>
                        <a href=''>FB</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>TW</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>INS</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>PT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}