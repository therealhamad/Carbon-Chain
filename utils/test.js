export default async function testFunc() {
  // Check if MetaMask is installed
  let signer;
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log("Connected account:", account);

      // Instantiate a provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer
      signer = provider.getSigner();

      console.log("Provider:", provider);
      console.log("Signer:", signer);

      // Create a contract instance
      contract = new ethers.Contract(contractAddress, contractABI, signer);

      console.log("Contract:", contract);
    } catch (error) {
      console.error("User denied account access", error);
    }
  } else {
    console.error("MetaMask is not installed");
    alert("Please install MetaMask!");
  }
}
