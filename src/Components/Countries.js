import React from "react";
import Card from "react-bootstrap/Card";
import Columns from "react-columns";

class Countries extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        var queries = [
            {
                columns: 2,
                query: "min-width: 500px",
            },
            {
                columns: 3,
                query: "min-width: 1000px",
            },
        ];


        const countries = this.props.countryData.map((country, index) => {
            return (
                <Card key={index} className="cards">
                    <Card.Img className="flag" variant="top" src={country.countryInfo.flag} />
                    <Card.Body>
                        <Card.Title>{country.country}</Card.Title>
                        <Card.Text>
                            Cases: {country.cases}
                        </Card.Text>
                        <Card.Text>
                            Recovered: {country.recovered}
                        </Card.Text>
                        <Card.Text>
                            Deaths: {country.deaths}
                        </Card.Text>
                        <Card.Text>
                            Cases today: {country.todayCases}
                        </Card.Text>
                    </Card.Body>
                </Card>);
        })

        return (
            <React.Fragment>
                <Columns queries={queries} className="text-center">
                    {countries}
                </Columns>
            </React.Fragment>
        );

    }
}

export default Countries;
