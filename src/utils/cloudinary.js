import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_APPI_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null;

            //upload the file on cloudinary

            const response = await cloudinary.uploader.upload(
                localFilePath, {
                resource_type: "auto"
            })

            console.log("File is uploaded on cloudinary", response.url);

            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath)  /*removes the locally saved 
            temporary file as the upload operation got failed*/

            return null;
        }
    }
})()
   

    

    