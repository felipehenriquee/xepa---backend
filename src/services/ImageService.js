const Images = require('../models/Images');
const { uploadFile } = require("../utils/S3Storage")
const fs = require('fs')
const path = require("path")
const multerConfig = require("../config/multer")
module.exports = {
    async upload(file){
        console.log("service", file)
        try {
            const result = await uploadFile(file)
            await fs.promises.unlink(file.path);
            const idImage = await this.saveImageBd(result.Location);
            return {imagePath: result.Location, imageId: idImage}
        } catch (error) {
            console.log(error)
            return error
        }
        
    },
    async saveImageBd(Path){
        try {
            const image = await Images.create( { Path, Tipo: "null"} );
            return (image.Id);
        } catch (error) {
            return error
        }
    }
   
    
    
    
    
}