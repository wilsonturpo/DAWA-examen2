const MongoAccountRepository = require('./infraestructure/MongoAccountRepository')
const getAllAccounts = require('./application/getAllAccounts')
const createAccount = require('./application/createAccount')
const updateAccount = require('./application/updateAccount')
const deleteById = require('./application/deleteAccount')
const addMoney = require('./application/addMoney')
const desembolsarMoney = require('./application/desembolsarMoney')
const transferMoney = require('./application/transferMoney')
const getByEntity= require('./application/getByEntity')
const getAllMoney= require('./application/getAllMoney')

const AccountRepository = new MongoAccountRepository()


const getAccounts = async (_, res, next) => {
    try {
      const query = getAllAccounts({ AccountRepository })
      const account = await query()
      res.status(200).json({
        data: account,
        message: 'Accounts listed'
      })
    } catch (e) {
      next(e)
    }
}

const newAccount = async (req, res, next) => {
  try {
    const query = createAccount({ AccountRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'account created'
    })
  } catch (e) {
    next(e)
  }
}

const updateAccountt = async (req, res, next) => {
    try {
      const query = updateAccount({ AccountRepository })
      const account = await query(req.body)
      res.status(201).json({
        data: account,
        message: 'Account updated'
      })
    } catch (e) {
      next(e)
    }
}

const deleteAccount = async (req, res, next) => {
    try {
      const query = deleteById({ AccountRepository })
      const entity = await query(req.params)
      res.status(200).json({
        data: entity,
        message: 'Account deleted'
      })
    } catch (e) {
      next(e)
    }
}

const addMoneyToAccount = async (req, res, next) => {
  try {
    const query = addMoney({ AccountRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Abono OK'
    })
  } catch (e) {
    next(e)
  }
}

const DesembolsarMoneyToAccount = async (req, res, next) => {
  try {
    const query = desembolsarMoney({ AccountRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Desembolso OK'
    })
  } catch (e) {
    next(e)
  }
}

const transferMoneyToAccount = async (req, res, next) => {
  try {
    const query = transferMoney({ AccountRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Tranfer OK'
    })
  } catch (e) {
    next(e)
  }
}

const getAccountByEntity = async (req, res, next) => {
  try {
    const query = getByEntity({ AccountRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Accounts listed'
    })
  } catch (e) {
    next(e)
  }
}

const getAllMoneyFromEntity = async (req, res, next) => {
  try {
    const query = getAllMoney({ AccountRepository })
    const contact = await query(req.params)

    var AllMoney = contact.reduce(function(prev, cur) {
      return prev + cur.money;
    }, 0);

    res.status(200).json({
      data: AllMoney,
      message: 'All money of your accounts'
    })
  } catch (e) {
    next(e)
  }
}


module.exports = {
  newAccount,
  getAccounts,
  updateAccountt,
  deleteAccount,
  addMoneyToAccount,
  DesembolsarMoneyToAccount,
  transferMoneyToAccount,
  getAccountByEntity,
  getAllMoneyFromEntity
}
