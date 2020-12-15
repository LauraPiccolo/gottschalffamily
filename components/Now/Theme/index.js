const Theme = ({ theme }) => {

    theme = {
      year: '2020',
      title: 'Happiness',
      description: 'Non nus es rem as escitiandam et et omnias ut faccuptas magnim inimodi destemo ditiuntio. Ut quia ipsam faccull upturis mossimi ncipsus ut apidicius qui aborese quibusdae que nistis aut voluptas quo tor sent etur, tenis et eumqui consequo voloreh endiandam, senimusapis doluptaerio. Um nusam rent etus eosantur? Mint assit venihilis volor suntiant, siminus eium utat eligenditem expero eliberspit est, audit eos dolluptate natur rem ut ut quas quodi alicillupit exeratem quo ipiciaeprore con cus simet quiae porepe nesequatet.'
    }

    return (
      <div className="now__theme">
        <h2 className="now__theme__title">{theme.title}</h2>
        <h3 className="now__theme__year">{theme.year}</h3>
        <p className="now__theme__description" dangerouslySetInnerHTML={{__html: theme.description}} />
      </div>
    );
};

export default Theme;
