import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { DotLoader } from "react-spinners";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const CATEGORIES_QUERY = gql`
  query {
    expenseCategories {
      title
      expenses {
        title
      }
    }
  }
`;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Display = (props) => {
  const { loading, data } = useQuery(CATEGORIES_QUERY);

  if (!loading) {
    // Extract title and total expenses
    console.log(data);
    const refinedData = data.expenseCategories.map((c) => {
      return {
        name: c["title"],
        value: c["expenses"].length,
      };
    });

    return (
      <>
        <Container>
          <ResponsiveContainer height={200}>
            <PieChart>
              <Pie
                data={refinedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
              >
                {refinedData.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Container>
      </>
    );
  }

  return <DotLoader color="#36D7B7" />;
};

export default Display;
