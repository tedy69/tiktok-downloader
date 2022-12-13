export default function ({ store, redirect }) {
  if (!store.state.photo) {
    return redirect("/");
  }
}
