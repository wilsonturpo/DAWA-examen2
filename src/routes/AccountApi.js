const router = require('express').Router()

const {
    newAccount,
    getAccounts,
    updateAccountt,
    deleteAccount,
    addMoneyToAccount,
    DesembolsarMoneyToAccount,
    transferMoneyToAccount,
    getAccountByEntity,
    getAllMoneyFromEntity
  } = require('../components/account/controller')
  
router.get(
    '/api/accounts',
    getAccounts
)

router.post(
    '/api/accounts',
    newAccount
)

router.put(
    '/api/accounts',
    updateAccountt
)

router.delete(
    '/api/accounts/:id',
    deleteAccount
)

router.put(
    '/api/accounts/pay',
    addMoneyToAccount
)

router.put(
    '/api/accounts/retire',
    DesembolsarMoneyToAccount
)

//Tranfers
router.put(
    '/api/accounts/transfer',
    transferMoneyToAccount
)

//Get Accounts
router.get(
    '/api/accounts/:id',
    getAccountByEntity
)

router.get(
    '/api/accounts/allMoney/:id',
    getAllMoneyFromEntity
)
module.exports = router



