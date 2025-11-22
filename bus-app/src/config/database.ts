import mongoose from 'mongoose';

export async function connectDB(uri: string): Promise<void> {
    try {
        
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri, {
            
        } as mongoose.ConnectOptions);
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Erro ao conectar no MongoDB:', (err as Error).message);
        throw err;
    }
}

export function disconnectDB(): Promise<void> {
    return mongoose.disconnect();
}