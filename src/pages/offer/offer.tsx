import Header from '../../components/header/header';
import Gallery from '../../components/offer/gallery/gallery';
import ReviewCard from '../../components/offer/review-card/review-card';
import ReviewForm from '../../components/offer/review-form/review-form';
import Map from '../../components/offer/map/map';
import Info from '../../components/offer/info/info';
import Host from '../../components/offer/host/host';
import NearPlaces from '../../components/near-places/near-places';

export default function Favorites(): JSX.Element {
  const isLoggedIn = true;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <Info />
              <Host />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <ReviewCard />
                </ul>
                {isLoggedIn && <ReviewForm />}
              </section>
            </div>
          </div>
          <Map />
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}
