// User Datas -------------------------------------------------

    const account1 = {
        owner: 'Jon Snow',
        movements: [12, 12, 12, 12], // Hours Worked
        pin: 1111
    };

    const account2 = {
        owner: "Jessy Davis",
        movements: [8, 8],
        pin: 2222
    };

    const account3 = {
        owner: "Steve Thomas",
        movements: [8, 8, 8, 8, 8],
        pin: 3333
    }

    const accounts = [account1, account2, account3];

// ------------------------------------------------- Elements -------------------------------------------------

    const homeDate = document.querySelector('#time');
    const labelWelcome = document.querySelector('.welcome');
    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');
    const btnLogin = document.querySelector('.login__btn');
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');

    const btnin = document.querySelector(".sign-in")
    const btnout = document.querySelector(".sign-out")

// ------------------------------------------------- Functions -------------------------------------------------

    // Date/Time Function
    function t() {
        homeDate.innerHTML = new Date().toLocaleString();
    }

    t();
    window.setInterval(t, 1000);


  // Functions

  // const displayMovements = function (movements, sort = false) {
  //   containerMovements.innerHTML = '';

  //   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  //   movs.forEach(function (mov, i) {
  //     const type = mov > 0 ? 'deposit' : 'withdrawal';

  //     const html = `
  //       <div class="movements__row">
  //         <div class="movements__type movements__type--${type}">${
  //       i + 1
  //     } ${type}</div>
  //         <div class="movements__value">${mov}€</div>
  //       </div>
  //     `;

  //     containerMovements.insertAdjacentHTML('afterbegin', html);
  //   });
  // };

  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
  };

  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
  };

  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);

  const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
  };

  ///////////////////////////////////////
  // Event handlers
  let currentAccount;

  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      // Update UI
      // updateUI(currentAccount);

    }
  });

  // Sign in/out Button

  const stas = document.querySelector(".movements__date");

  btnin.addEventListener("click", status2, signIn)

  function signIn() {
    if (true) {

      btnin.className = "sign-out";
      btnin.innerHTML = "Sign Out"
      
    }
  }

  function status2() {
    if (true) {
      stas.innerHTML = `SIGNED IN AT ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}`;
    }
  }
