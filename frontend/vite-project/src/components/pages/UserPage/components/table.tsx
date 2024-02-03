import { useState , useEffect } from "react"
import axios from "axios";


interface Row {
    name: string;
    weight: number;
    meal: string;
    carb: number;
    calorie: number;
    protein: number;
    fat: number;
}

interface Food {
    food_name: string;
    food_calorie_per_hundred_gr: number;
    food_protein_per_hundred_gr: number;
    food_carb_per_hundred_gr: number;
    food_fat_per_hundred_gr: number;
}

const Table = () => {
    const [rows, setRows] = useState<Row[]>([]);
    const [newRowWeight, setNewRowWeight] = useState<number>(0);
    const [selectedFood, setSelectedFood] = useState<string>('ghorme');
    const [selectedMeal, setSelectedMeal] = useState<string>('صبحانه');
    const [all_foods, setAllFoods] = useState<Food[]>([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8000/control/foods/')
          .then(response => response.json())
          .then(data => setAllFoods(data))
          .catch(error => console.error('Error fetching food list:', error));
      }, []);
    useEffect(() => {
        axios.get('http://localhost:8000/user/meallist/', {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(data => {
            setRows(data.data)
        })
        .catch((err) => console.error(err));
        setCount(100);
    }, [])
    const handleMeal = async(meal) => {
        try {
            const response = await axios.post('http://localhost:8000/user/meallist/', meal,
                {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }
            )
            console.log(response.data)
        }
        catch (e) {
            console.log("not added to back");
            console.log(e.response.data);
        }
    }
    const addRow = () => {
        if (selectedFood && newRowWeight && selectedMeal) {
            let i = 0;
            for (i = 0; i < all_foods.length; i++) {
                if (all_foods[i].food_name == selectedFood) {
                    break;
                }
            }
            const newCalorie = Number((all_foods[i].food_calorie_per_hundred_gr * (newRowWeight / 100)).toFixed(1));
            const newCarb = Number((all_foods[i].food_carb_per_hundred_gr * (newRowWeight / 100)).toFixed(1));
            const newProtein = Number((all_foods[i].food_protein_per_hundred_gr * (newRowWeight / 100)).toFixed(1));
            const newFat = Number((all_foods[i].food_fat_per_hundred_gr * (newRowWeight / 100)).toFixed(1));
    
            const newRow: Row = {
                name: selectedFood,
                weight: newRowWeight,
                meal: selectedMeal,
                carb: newCarb,
                calorie: newCalorie,
                protein: newProtein,
                fat: newFat,
            };

            let mealType = "";
            if (selectedMeal == 'صبحانه') {
                mealType = "breakfast";
            }
            if (selectedMeal == 'نهار') {
                mealType = "lunch";
            }
            if (selectedMeal == 'میان‌وعده') {
                mealType = "snack";
            }
            if (selectedMeal == 'شام') {
                mealType = "dinner";
            }
            const meal = {
                "token": localStorage.getItem('token'),
                "meal_food": selectedFood,
                "meal_type": mealType,
                "meal_amount": newRowWeight,
                "date_eaten": new Date()
            }
            console.log(meal);
            try {
                handleMeal(meal);
                setRows([...rows, newRow]);
                setSelectedFood('');
                setSelectedMeal('صبحانه');
                setNewRowWeight(0);
            }
            catch (e) {
                console.log("not added to front");
            }
        }
      };
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 mb-20 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead dir='rtl' className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            چربی
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            قند
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            پروتئین
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                            کالری
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                            وعده
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                            مقدار (گرم)
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                            نام غذا
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <button
                                                type="button"
                                                className="block rounded-md bg-emerald-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                                                onClick={() => addRow()}
                                            >
                                                افزودن غذا
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody dir='rtl' className="divide-y divide-gray-200 bg-white">
                                    {rows.map((row, index) => (
                                        <tr key={row.name + index} className="even:bg-gray-50 odd:bg-white">
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.fat}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.carb}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.protein}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.calorie}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.meal}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{row.weight}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ">{row.name}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button className="text-emerald-600 hover:text-emerald-900">
                                                    ویرایش<span className="sr-only">, {row.name}</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="even:bg-gray-50 odd:bg-white">
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">-</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">-</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">-</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">-</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                            <select
                                                value={selectedMeal}
                                                onChange={(e) => {
                                                    setSelectedFood(e.target.value);
                                                    console.log(e.target.value);
                                                }}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option key="breakfast" value="breakfast">
                                                    صبحانه
                                                </option>
                                                <option key="dinner" value="dinner">
                                                    شام
                                                </option>
                                                <option key="lunch" value="lunch">
                                                    نهار
                                                </option>
                                                <option key="snack" value="snack">
                                                    میان‌وعده
                                                </option>
                                            </select>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                            <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                type="number"
                                                value={newRowWeight}
                                                onChange={(e) => setNewRowWeight(parseFloat(e.target.value))}
                                                placeholder="وزن"
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                            <select
                                                value={selectedFood}
                                                onChange={(e) => {
                                                    setSelectedFood(e.target.value);
                                                    console.log(e.target.value);
                                                }}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                {all_foods.map((food, index) => (
                                                <option key={index} value={food.food_name}>
                                                    {food.food_name}
                                                </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table