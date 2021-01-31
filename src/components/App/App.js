import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { PieChart, Pie, Tooltip } from 'recharts';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { fizzbuzz, getNbOccurence } from '../../utils';
import { field } from "../../constant";

import './App.css';

const Input = ({ field, ...props}) => <TextField {...field} {...props} />;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    const plural =  payload[0].value > 1 ? 'occurences' : 'occurence';

    return (
      <div className="CustomTooltip">
        <p className="label">{`${payload[0].value} ${plural} of ${payload[0].name}`}</p>
      </div>
    );
  }

  return null;
};

function App() {
  const [data, setData] = useState([]);

  const validate = values => {
    const errors = {};

    if (!values.int1) errors.int1 = field.required;
    if (!values.int2) errors.int2 = field.required;
    if (!values.limit) errors.limit = field.required;
    if (!values.str1) errors.str1 = field.required;
    if (!values.str2) errors.str2 = field.required;
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          int1: 0,
          int2: 0,
          limit: 0,
          str1: '',
          str2: '',
        }}
        validate={validate}
        onSubmit={(values) => {
          const { int1, int2, limit, str1, str2 } = values;
          const result = fizzbuzz(int1, int2, limit, str1, str2);
          const nbOccurence = getNbOccurence(result);
          setData(nbOccurence);
        }}
      >
        <Form className="Form">
          <Field type="number" name="int1" required label="Integer 1" component={Input} />
          <Field type="number" name="int2" required label="Integer 2" component={Input} />
          <Field type="number" name="limit" required label="Limit" component={Input} />
          <Field type="text" name="str1" required label="String 1" component={Input} />
          <Field type="text" name="str2" required label="String 2" component={Input} />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      <div className="Chart">
        {!data.length ? (
          <div>no data</div>
        ): (
          <PieChart width={500} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              fill="#8884d8"
            />
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        )}
      </div>
    </div>
  );
}

export default App;
