let GridView = (styles, items) => {
  let GridItem = (title, description, href) => {
    let icons = { arrow: '&rarr;' };
    return (
      <a href={href} className={styles.card}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </a>
    );
  };

  return (
    <div className={styles.grid}>
      <GridItem title={'Test'} description={'Desc'} link="#" />
      <GridItem title={'Host'} description={'Host data'} link="#" />
      <GridItem title={'Test'} description={'Desc'} link="#" />
      <GridItem title={'Test'} description={'Desc'} link="#" />
      <GridItem title={'Test'} description={'Desc'} link="#" />
    </div>
  );
};
export default GridView;
