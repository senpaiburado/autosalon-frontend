import { Map, GoogleApiWrapper } from 'google-maps-react';

export default function About() {

    return (
        <div className="col">
            <div className="row center-items manuf-title">
                Про нас
            </div>
            <div className="row center-items white-text">
                Ми - автосалон №1 в Україні. Привозимо автомобілі з заводу та продаємо в Україні з чистими документами
                
            </div>
            <div className="row center-items" style={{ marginTop: 20 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169794.7238084403!2d25.79383558293025!3d48.32126295223221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734087fe2f6cd05%3A0xc5b396f659796d7a!2z0KfQtdGA0L3QvtCy0YbRiywg0KfQtdGA0L3QvtCy0LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTgwMDA!5e0!3m2!1sru!2sua!4v1623366897143!5m2!1sru!2sua"
              width="70%"
              height="550"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            </div>
        </div>
    )
}