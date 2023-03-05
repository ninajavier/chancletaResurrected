import React from 'react';
import { useState } from 'react';

const Checkout = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExp, setCardExp] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setCountry('');
        setPhone('');
        setCardNumber('');
        setCardName('');
        setCardExp('');
        setCardCvv('');
        window.alert('Thank you for your purchase!');

    }

    return (
        <div className='checkout'>
            <form onSubmit={handleSubmit}>
                <h1>Checkout</h1>
                <br/>
                <label for='firstName'>First Name</label>
                <input required
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br/>
                <label for='lastName'>Last Name</label>
                <input required
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                 <label for='email'>Email</label>
                <input required
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label for='address'>Address</label>
                <input required
                    type='text'
                    id='address'
                    name='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label for='city'>City</label>
                <input required
                    type='text'
                    id='city'
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label for='state'>State</label>
                <input required
                    type='text'
                    id='state'
                    name='state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label for='zip'>Zip</label>
                <input required
                    type='number'
                    id='zip'
                    name='zip'
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />
                <label for='country'>Country</label>
                <input required
                    type='text'
                    id='country'
                    name='country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label for='phone'>Phone</label>
                <input required
                    type='phone'
                    id='phone'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label for='cardNumber'>Card Number</label>
                <input required
                    type='number'
                    id='cardNumber'
                    name='cardNumber'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <label for='cardName'>Card Name</label>
                <input required
                    type='text'
                    id='cardName'
                    name='cardName'
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                />
                <label for='cardExp'>Card Expiration</label>
                <input required
                    type='text'
                    id='cardExp'
                    name='cardExp'
                    value={cardExp}
                    onChange={(e) => setCardExp(e.target.value)}
                />
                <label for='cardCvv'>Card CVV</label>   
                <input required
                    type='text'
                    id='cardCvv'
                    name='cardCvv'
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                />
                <button type='submit'>Submit</button>
                
            </form>
            
      </div>
  )

}

export default Checkout;