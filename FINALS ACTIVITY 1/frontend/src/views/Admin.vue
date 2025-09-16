<template>
  <div>
    <h2>Admin Form</h2>
    <form @submit.prevent="submitAdmin">
      <fieldset>
        <input v-model="adminId" placeholder="Admin ID" />
        <input v-model="firstName" placeholder="First Name" />
        <input v-model="lastName" placeholder="Last Name" />
        <input v-model="department" placeholder="Department" />
        <button type="submit">Save</button>
      </fieldset>
    </form>

    <h3>Saved Admins:</h3>
    <ul>
      <li v-for="s in admins" :key="s._id">
        {{ s.adminId }} - {{ s.firstName }} {{ s.lastName }} ({{ s.department }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const adminId = ref("");
const firstName = ref("");
const lastName = ref("");
const department = ref("");
const admins = ref([]);

const fetchAdmins = async () => {
  const res = await axios.get("http://localhost:3000/api/admin");
  admins.value = res.data;
};

const submitAdmin = async () => {
  await axios.post("http://localhost:3000/api/admin", {
    adminId: adminId.value,
    firstName: firstName.value,
    lastName: lastName.value,
    department: department.value,
  });
  await fetchAdmins();
  adminId.value = firstName.value = lastName.value = department.value = "";
};

onMounted(fetchAdmins);
</script>