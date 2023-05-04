
module.exports = class {
  async getCount (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectMany ({ condition, ability, limit, skip, sort, project }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectManyAggregate ({ condition, ability, limit, skip, sort, project }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectOne ({ condition, ability }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async create (data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async updateOne (condition, updateData) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async updateMany (condition, updateData) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async removeOne (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async removeMany (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  /* Redis */

  genOtp () {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async saveOtp (phone, otp) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async getOtp (phone) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async delOtp (phone) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async verifyOtp (phone, otp) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }
};
