/**
 * The plugin WooCommerce Checkout Manager
 *
 * Plugin to manage woocommerce checkout with beautiful integrations
 * https://www.w3schools.com/jsref/jsref_tolocalestring.asp
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 * https://www.w3schools.com/jsref/jsref_parsefloat.asp
 *
 *
 * @wordpress-plugin
 * Script Name:       WooCommerce Checkout Manager
 * WooCommerce API URI:    https://woo.com/it-it/
 * Stripe API URI:     https://stripe.com/docs/api?lang=php
 * WooCommerce URI:    https://github.com/woocommerce/woocommerce-rest-api-docs/blob/trunk/source/includes/wp-api-v3/_orders.md
 * Description:       Plugin to manage woocommerce checkout with beautiful integrations.
 * Version:           1.0.0
 * Author:            Giovanni Sorrenti
 * Domain Path:       /
 */

//ECOMMERCE ONLINE RICEVERE DATI

//TODO controllare cosa ha acquistato l'utente ed il suo totale

const info = {
    id: 4750,
    parent_id: 0,
    number: "4750",
    order_key: "wc_order_Q6tuhq12KJOel",
    created_via: "admin",
    version: "3.9.1",
    status: "completed",
    currency: "EUR",
    date_created: "2020-03-11T16:54:40",
    date_created_gmt: "2020-03-11T19:54:40",
    date_modified: "2020-03-11T16:56:05",
    date_modified_gmt: "2020-03-11T19:56:05",
    discount_total: "0",
    discount_tax: "0",
    shipping_total: "0",
    shipping_tax: "0",
    prices_include_tax: false,
    customer_id: 1,
    customer_ip_address: "",
    customer_user_agent: "",
    customer_note: "",
    billing: {
      first_name: "Marco",
      last_name: "Rossi",
      company: "Develhope",
      address_1: "Via Test",
      address_2: "",
      city: "Milano",
      state: "IT",
      postcode: "1231234",
      country: "Milano",
      email: "test@test.com",
      phone: "999999",
    },
    shipping: {
      first_name: "Marco",
      last_name: "Rossi",
      company: "Develhope",
      address_1: "Via Test",
      address_2: "",
      city: "Milano",
      state: "IT",
      postcode: "99999999",
      country: "Milano",
    },
    payment_method: "stripe",
    payment_method_title: "",
    transaction_id: "",
    date_paid: "2020-03-11T16:56:05",
    date_paid_gmt: "2020-03-11T19:56:05",
    date_completed: "2020-03-11T16:56:05",
    date_completed_gmt: "2020-03-11T19:56:05",
    cart_hash: "",
  
    line_items: [
      {
        id: 2593,
        name: "Supporto bruciatore tripla corona venturo cucina gas Smeg",
        product_id: 626,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "1590",
        subtotal_tax: "0",
        total: "1590",
        total_tax: "0",
        taxes: [],
        meta_data: [],
        sku: "5e519142e647469316de29c",
        price: 1590,
      },
      {
        id: 2093,
        name: "5 SACCHETTI ASPIRAPOLVERE BIDONE ASPIRATUTTO AQUAVAC - NS 264",
        product_id: 621,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "625",
        subtotal_tax: "0",
        total: "625",
        total_tax: "0",
        taxes: [],
        meta_data: [],
        sku: "5e519da42e647439316de29c",
        price: 625,
      },
      {
        id: 3093,
        name: "5 SACCHETTI ASPIRAPOLVERE CARREFOUR BVC 2000 - NS 240",
        product_id: 624,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "390",
        subtotal_tax: "0",
        total: "780",
        total_tax: "0",
        taxes: [],
        meta_data: [],
        sku: "5e519da42e647469346de29c",
        price: 390,
      },
      {
        id: 6093,
        name: "FOLLETTO SPAZZOLA HD35 PER ASPIRAPOLVERE VK135 VK136 VK140 VK150 - COMPATIBILE",
        product_id: 694,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "3260",
        subtotal_tax: "0",
        total: "3260",
        total_tax: "0",
        taxes: [],
        meta_data: [],
        sku: "5e519da42e647469346de29c",
        price: 3260,
      },
    ],
    tax_lines: [],
    shipping_lines: [
      {
        method_id: "gls",
        method_title: "GLS",
        total: "10.00",
      },
    ],
    coupon_lines: [
      {
        code: "10off",
        discount_type: "percent",
        amount: "10",
        individual_use: true,
        exclude_sale_items: true,
        minimum_amount: 100,
      },
    ],
  };
  
  //SARA' INSERITO COME RISPOSTA NELLE PROMISE
  const stripeDatas = {
    livemode: true,
    payment_status: "unpaid", //se il pagamente è andato a buon fine
    status: "open", //se hai ancora la pg di pagamento attiva
  };
  
  //CON SETTIMEOUT
  // // //TODO controllare cosa ha acquistato l'utente e quanto deve pagare
  // function checkShop(products) {
  //   return new Promise((resolve, reject) => {
  //     let shop = products.line_items.map(
  //       (item) => `${item.name} ${info.currency} ${item.price}`
  //     );
  
  //     setTimeout(() => {
  //       if (info.status === "completed") {
  //         resolve("I PRODOTTI ACQUISTATI = " + shop);
  //         let sum = 0;
  //         products.line_items.forEach((element) => {
  //           sum += element.price;
  //         });
  //         console.log("Totale speso =", sum);
  //       } else if (info.status === "pending") {
  //         resolve(`E' in corso il pagamento di = `);
  //       } else {
  //         reject(new Error("404! Qualcosa è andato storto"));
  //       }
  //     }, 1000);
  //   });
  // }
  
  //TODO controllare cosa ha acquistato l'utente e quanto deve pagare
  function checkShop(products) {
    let shop = products.line_items.map(
      (item) => `${item.name} ${info.currency} ${item.price}`
    );
  
    if (info.status === "completed") {
      console.log("I PRODOTTI ACQUISTATI = " + shop);
  
      //fa la somma dei prezzi
      let sum = 0;
      products.line_items.forEach((element) => {
        sum += element.price;
      });
      console.log("Totale speso =", sum);
  
      //chiamo una callBack come argomento il totale
      checkCoupon(sum);
    } else if (info.status === "pending") {
      console.log(`E' in corso il pagamento di = `);
    } else {
      console.error(new Error("404! Qualcosa è andato storto"));
    }
  }
  
  //TODO inviare all'utente ad un gateawey scelto
  
  function gateAwey() {
    return new Promise((resolve, reject) => {
      //simuliamo una chiamata al servizio di pagamento stripe esterno
  
      setInterval(() => {
        //stripe ci ha risposto tramite JSON
        //Il const stripe data, sta dopo il setInterval perchè stiamo simulando una connessione a stripe, ed i dati che ritorna.
        const stripeDatas = {
          livemode: true,
          payment_status: "unpaid", //se il pagamente è andato a buon fine
          status: "open", //se hai ancora la pg di pagamento attiva
        };
  
        if (stripeDatas.payment_method !== "" && stripeDatas.status === "open") {
          resolve(`Collegamento in corso a = ${info.payment_method}`);
        } else {
          reject("Nessun pagamento selezionato");
        }
      }, 2000);
    });
  }
  
  //TODO: controllare il metodo di spedizione scelto e fare la chiamata al servizio API scelto, invio delle info
  
  function checkShipping(ship) {
    console.log("controllo servizio di spedizione scelto... ");
  
    if (ship.shipping_lines[0].method_id === "gls") {
      //servizio scelto
      //metodo scelto
      console.log("Il cliente ha scelto " + ship.shipping_lines[0].method_id);
  
      return new Promise((resolve, reject) => {
        //collegamento a gls, simulazione
  
        setTimeout(() => {
          //gls ha risposto tramite json
          const jsonGls = {
            liveMode: "true",
            status: "open",
            shopping_status: "completed",
          };
  
          if (jsonGls.shopping_status === "completed") {
            resolve("Shipping completed");
          } else {
            reject(new Error("server error"));
          }
        }, 4000);
      });
    } else {
      console.error(new Error("404!"));
    };
  };
  
  //TODO verificare se il pagamento è andato a buon fine
  
  async function checkPayment() {
    return new Promise((resolve, reject) => {
  
      //come risposta al delay, do l'oggetto stripeDatas
      setTimeout(() => {
        const stripeDatas = {
          livemode: true,
          payment_status: "unpaid", //se il pagamente è andato a buon fine
          status: "open", //se hai ancora la pg di pagamento attiva
        };
  
        if (stripeDatas.payment_status === "paid") {
          resolve("The payment was succesful");
        } else {
          reject(new Error("The payment was not succesful"));
        }
      }, 3000);
    });
  }
  
  
  
  
  
  //TODO GESTIONE COUPON, SE INSERITO VERIFICARE SE RIENTRA NELLA CIFRA MINIMA, SOTTRARRE QUELLA SOMMA
  
  // function checkCoupon(tot) {
  
  //   //controllo se il coupon è presente
  //   if (info.coupon_lines[0].code !== " " && tot >= info.coupon_lines[0].minimum_amount ) {
  
  //     //stampo il coupon
  //     console.log("COUPON CODE = ", info.coupon_lines[0].code);
  
  //     //calcolo percentuale
  //     let discount = tot * info.coupon_lines[0].amount / 100;
  //     let totDiscount = tot - discount;
  
  //     //stampo la percentuale
  //     console.log("SCONTO APPLICATO = ", totDiscount);
  //   } else {
  //     console.log("nessun coupon presente");
  //   }
  // }
  
  //OPPURE
  function checkCoupon(tot) {
    //controllo se il coupon è presente
    if (info.coupon_lines[0]) {
      if (tot >= info.coupon_lines[0].minimum_amount) {
  
        //stampo il coupon
        console.log("COUPON CODE = ", info.coupon_lines[0].code);
  
        //calcolo percentuale
  
        let totDiscount = tot - (tot * info.coupon_lines[0].amount) / 100;
  
        //stampo la percentuale
        console.log("SCONTO APPLICATO = ", totDiscount);
  
      } else {
        console.log("nessun coupon presente");
      };
    };
  };
  
  //FUNZIONE AVVIA PROMISE
  async function startPromise() {
    try {
      checkShop(info);
  
      const stripePayment = await gateAwey(info);
      console.log(stripePayment);
  
      const pay = await checkPayment(); //stampa error perchè la promise aspetta prima che la precedente sia andata a buon fine
      console.log(pay);
  
      const ship = await checkShipping(info);
      console.log(ship);
    } catch (error) {
      console.error(error);
    }
  }
  
  startPromise();
  