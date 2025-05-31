import { IMedicine } from './medicine.interface';
import MedicineModle from './medicine.modle';

const createMedicine = async (payload: IMedicine) => {
  const { expiryDate, createdBy } = payload;
  const today = new Date();

  // ⛔ Prevent posting expired medicine
  if (new Date(expiryDate) <= today) {
    throw new Error('Expiry date must be in the future.');
  }

  // ✅ Add createdBy using logged-in pharmacist's _id
  const medicineToCreate = {
    ...payload,
    createdBy,
  };

  // ✅ Create medicine
  const result = await MedicineModle.create(medicineToCreate);

  return result;
};

const getAllNonExpiredMedicines = async () => {
  const medicines = await MedicineModle.find({ isExpired: false });
  return medicines;
};

const markExpiredMedicines = async () => {
  const today = new Date();

  const expiredMeds = await MedicineModle.find({
    expiryDate: { $lte: today },
    isExpired: false,
  });

  for (const med of expiredMeds) {
    med.isExpired = true;
    await med.save();
  }

  return expiredMeds;
};
export const MedicineService = {
  createMedicine,
  getAllNonExpiredMedicines,
  markExpiredMedicines,
};
