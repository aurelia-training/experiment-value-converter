# experiment-value-converters
A simple test for value converters in aurelia

Two value converters included:

1. `toString`: convert any value to string (runs the `.toString()` method)
2. `toCurrency`: convert a numeric value to the specified currency format
    - Requires `currencyFormat` param, e.g., `"USD"`
