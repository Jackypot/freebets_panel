//Inicializar cosas durante la carga de la pagina
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
    //modificar interfaz
  } else {
    console.log('algo fallo ve y grita auxilio a jorge  ( ﾟдﾟ)');

  }

})

//alerta de red
var startApp = ()=>{
  web3.version.getNetwork((err, netId) => {
    switch (netId){
      case "1":
        window.alert('No deberias estar en esta red,\n cambia la red de MetaMask a Ropsten ಠ~ಠ');
        break
      case "2":
          window.alert('No deberias estar en esta red,\n cambia la red de MetaMask a Ropsten ಠ~ಠ');
        break
      case "3":
          window.alert('Estas en la Red correcta 👍');
        break
      case "4":
          window.alert('No deberias estar en esta red,\n cambia la red de MetaMask a Ropsten ಠ~ಠ');
        break
      case "42":
          window.alert('No deberias estar en esta red,\n cambia la red de MetaMask a Ropsten ಠ~ಠ');
        break
      default:
          window.alert('No deberias estar en esta red,\n cambia la red de MetaMask a Ropsten ಠ~ಠ');
        }
  });

}

//funcion para el boton de dar el tiro gratis
var tx = (_clienteAdress)=>{
  // contract abi
  // creation of contract object
  // initiate contract for an addressd
  let abi = [
    {
      "constant": false,
      "inputs": [

      ],
      "name": "depositInPot",
      "outputs": [

      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        },
        {
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawal",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [

      ],
      "name": "KillContract",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "player",
          "type": "address"
        }
      ],
      "name": "freeBet",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAccount",
          "type": "address"
        }
      ],
      "name": "changeAccount",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAmount",
          "type": "uint256"
        }
      ],
      "name": "changeFreeBetValue",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOperative",
          "type": "address"
        }
      ],
      "name": "changeOperative",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMinBet",
          "type": "uint256"
        },
        {
          "name": "newMaxBet",
          "type": "uint256"
        }
      ],
      "name": "rangeOfBets",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "x",
          "type": "bytes32"
        }
      ],
      "name": "logfolio",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "y",
          "type": "string"
        }
      ],
      "name": "logResult",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "z",
          "type": "string"
        }
      ],
      "name": "newOraclizeQuery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "w",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "type": "event"
    }
  ];
  let MyContract = web3.eth.contract(abi);
  let myContractInstance = MyContract.at('0xE920191050404ac52D05A8d889c3Ed097AD4Fe49');
  // send a transaction to a function
  myContractInstance.freeBet(_clienteAdress,(error, result)=>{
    if(!error) window.alert('todo salio bien, (◕‿-)');
    else window.alert('(┛◉Д◉)┛┻━┻  '+error); });
}

document.querySelector("#btn-address").addEventListener("click", activar_txAll, false);
function activar_txAll () {
    let abi = [
      {
        "constant": false,
        "inputs": [

        ],
        "name": "depositInPot",
        "outputs": [

        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "myid",
            "type": "bytes32"
          },
          {
            "name": "result",
            "type": "string"
          }
        ],
        "name": "__callback",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "myid",
            "type": "bytes32"
          },
          {
            "name": "result",
            "type": "string"
          },
          {
            "name": "proof",
            "type": "bytes"
          }
        ],
        "name": "__callback",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdrawal",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [

        ],
        "name": "KillContract",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "player",
            "type": "address"
          }
        ],
        "name": "freeBet",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newAccount",
            "type": "address"
          }
        ],
        "name": "changeAccount",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newAmount",
            "type": "uint256"
          }
        ],
        "name": "changeFreeBetValue",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOperative",
            "type": "address"
          }
        ],
        "name": "changeOperative",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newMinBet",
            "type": "uint256"
          },
          {
            "name": "newMaxBet",
            "type": "uint256"
          }
        ],
        "name": "rangeOfBets",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "x",
            "type": "bytes32"
          }
        ],
        "name": "logfolio",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "y",
            "type": "string"
          }
        ],
        "name": "logResult",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "z",
            "type": "string"
          }
        ],
        "name": "newOraclizeQuery",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "w",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "type": "event"
      }
    ];
    let batch = web3.createBatch();
    let contrato = '0xE920191050404ac52D05A8d889c3Ed097AD4Fe49';
    batch.add(web3.eth.contract(abi).at(contrato).freeBet("0xc4d2C44aAc80C9Acbf604D78666C7E844F1870E1", callback__ejecucion));
    batch.add(web3.eth.contract(abi).at(contrato).freeBet("0x47B7a6096f19ed2b5cE897ddE6dd321d04F8dbe5", callback__ejecucion));
    ejecutar_transacciones();
}

function callback__ejecucion (){ console.log('┛◉Д◉)┛┻━┻'); }
function ejecutar_transacciones (){ batch.execute(); }

//funcion para añadir el eventlistener a todos los botones y manden un tiro gratis al valor de al lado
var botonTiroGratis = ()=>{
    boton.onclick = () =>{console.log("hola");tx(document.getElementById("address").value)};

    document.querySelectorAll(".accordion").forEach(function(elem) {
        elem.addEventListener("click", function() {
            showAcc();
        });
    });
}
