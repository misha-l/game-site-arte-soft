const StatusBlock2 = () => {
  return (
    <div class="status-block">
      <div class="server-bottom">
        <div class="flex-s-c">
          <span class="server-name">SERVER NAME</span> <span class="status-offline">Offline:</span>
        </div>
        <div class="progress-bar-off">
          <span style={{ width: "1%" }}></span>
        </div>
        <a href="/todo" class="desc">
          Server Description
        </a>{" "}
        <span class="status-offline">0</span>
      </div>
    </div>
  );
};

export default StatusBlock2;
