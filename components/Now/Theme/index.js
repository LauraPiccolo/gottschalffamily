const Theme = ({ theme }) => {

    theme = {
      period: theme.Period,
      title: theme.Title,
      description: theme.Description
    }

    return (
      <div className="now__theme">
        <h2 className="now__theme__title">{theme.title}</h2>
        <h3 className="now__theme__year">{theme.period}</h3>
        <p className="now__theme__description" dangerouslySetInnerHTML={{__html: theme.description}} />
      </div>
    );
};

export default Theme;
