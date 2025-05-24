import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return <h2>Сторінка товару з id: {id} (буде доповнена)</h2>;
}
