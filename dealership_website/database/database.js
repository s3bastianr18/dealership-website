
const { createClient } = require('@supabase/supabase-js');

// Connect to Supabase
const supabase = createClient('your_supabase_url', 'your_supabase_key');

// Example function to fetch cars
async function getCars() {
    let { data: cars, error } = await supabase
        .from('cars')
        .select('*');
    
    if (error) {
        console.error('Error fetching cars:', error);
    } else {
        console.log(cars);
    }
}

getCars();
