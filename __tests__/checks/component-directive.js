export const inputComponentDirectiveWithModule = `
angular
  .module("docsRestrictDirective", [])
  .controller("Controller", [
    "$scope",
    function ($scope) {
      $scope.customer = {
        name: "Naomi",
        address: "1600 Amphitheatre",
      };
    },
  ])
  .directive("myCustomer", function () {
    return {
      restrict: "E",
      templateUrl: "<p>Name: {customer.name} Address: {customer.address}</p>",
    };
  });
`;

export const inputComponentDirectiveWithoutModule = `
const a = b
  .controller("Controller", [
    "$scope",
    function ($scope) {
      $scope.customer = {
        name: "Naomi",
        address: "1600 Amphitheatre",
      };
    },
  ])
  .directive("myCustomer", function () {
    return {
      restrict: "E",
      templateUrl: "<p>Name: {customer.name} Address: {customer.address}</p>",
    };
  });
`;

export const outputComponentDirective = `
function MyCustomer() {
  const [customer, setCustomer] = useState({
    name: "Naomi",
    address: "1600 Amphitheatre",
  });

  return (
    <p>
      Name: {customer.name} Address: {customer.address}
    </p>
  );
}
`;
