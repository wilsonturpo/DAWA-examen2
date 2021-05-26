const MongoEntityRepository = require('./infraestructure/MongoEntityRepository')
const getAllEntities = require('./application/getAllEntities')
const createEntity = require('./application/createEntity')
const updateEntity = require('./application/updateEntity')
const deleteById = require('./application/deleteEntity')

const EntityRepository = new MongoEntityRepository()


const getEntities = async (_, res, next) => {
    try {
      const query = getAllEntities({ EntityRepository })
      const entity = await query()
      res.status(200).json({
        data: entity,
        message: 'Entities listed'
      })
    } catch (e) {
      next(e)
    }
}

const newEntity = async (req, res, next) => {
  try {
    const query = createEntity({ EntityRepository })
    const entity = await query(req.body)
    res.status(201).json({
      data: entity,
      message: 'entity created'
    })
  } catch (e) {
    next(e)
  }
}

const updateEntidad = async (req, res, next) => {
    try {
      const query = updateEntity({ EntityRepository })
      const entity = await query(req.body)
      res.status(201).json({
        data: entity,
        message: 'Entity updated'
      })
    } catch (e) {
      next(e)
    }
}

const deleteEntity = async (req, res, next) => {
    try {
      const query = deleteById({ EntityRepository })
      const entity = await query(req.params)
      res.status(200).json({
        data: entity,
        message: 'Entity deleted'
      })
    } catch (e) {
      next(e)
    }
}

module.exports = {
  newEntity,
  getEntities,
  updateEntidad,
  deleteEntity
}
