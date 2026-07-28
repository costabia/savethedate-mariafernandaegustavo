export default function Home() {
  return (
    <main className="page" aria-label="Save the date de Maria Fernanda e Gustavo">
      <section className="composition" aria-label="Composicao visual do convite">
        <img
          className="postcard postcard--decor postcard--decor-top"
          src="/assets/postcard-atras.jpg"
          alt=""
          aria-hidden="true"
        />
        <img
          className="postcard postcard--decor postcard--decor-bottom"
          src="/assets/postcard-atras.jpg"
          alt=""
          aria-hidden="true"
        />
        <article
          className="postcard postcard--main save-card"
          aria-label="Save the date para o casamento de Maria Fernanda e Gustavo, 10 de abril de 2027, Salao Verde, Clube Curitibano, as 14h30."
        >
          <div className="text-cover text-cover--title" aria-hidden="true" />
          <div className="text-cover text-cover--subtitle" aria-hidden="true" />
          <div className="text-cover text-cover--names" aria-hidden="true" />
          <div className="text-cover text-cover--date" aria-hidden="true" />
          <div className="text-cover text-cover--note" aria-hidden="true" />
          <div className="text-cover text-cover--room" aria-hidden="true" />
          <div className="text-cover text-cover--club" aria-hidden="true" />
          <div className="text-cover text-cover--address" aria-hidden="true" />
          <div className="text-cover text-cover--city" aria-hidden="true" />
          <div className="text-cover text-cover--time" aria-hidden="true" />

          <p className="card-text card-title">SAVE THE DATE</p>
          <p className="card-text card-subtitle">para o casamento de</p>
          <p className="card-text card-names">
            Maria Fernanda
            <br />e Gustavo
          </p>
          <p className="card-text card-date">10 DE ABRIL DE 2027</p>
          <p className="card-text card-note">convite oficial em breve</p>

          <p className="card-text card-room">Salão Verde</p>
          <p className="card-text card-club">Clube Curitibano</p>
          <p className="card-text card-address">AV. PRES. GETÚLIO VARGAS, 2857</p>
          <p className="card-text card-city">CURITIBA - PR</p>
          <p className="card-text card-time">às 14h30</p>
        </article>
      </section>
    </main>
  );
}
